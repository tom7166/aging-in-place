/*
  # Create Bing Submissions Tracking Table

  1. New Tables
    - `bing_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `urls` (text[], array) - Array of URLs submitted to Bing
      - `status` (text) - Status of submission (success/failed)
      - `response` (jsonb) - Full response from Bing API
      - `submitted_by` (uuid, foreign key) - Reference to auth.users
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `bing_submissions` table
    - Add policy for authenticated users to view all submissions
    - Add policy for authenticated users to insert submissions

  3. Indexes
    - Add index on created_at for efficient sorting
    - Add index on submitted_by for user-specific queries
*/

CREATE TABLE IF NOT EXISTS bing_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  urls text[] NOT NULL,
  status text NOT NULL,
  response jsonb,
  submitted_by uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bing_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view all submissions"
  ON bing_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert submissions"
  ON bing_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = submitted_by);

CREATE INDEX IF NOT EXISTS idx_bing_submissions_created_at 
  ON bing_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_bing_submissions_submitted_by 
  ON bing_submissions(submitted_by);