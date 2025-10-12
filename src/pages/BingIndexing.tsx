import { useState, useEffect } from 'react';
import { Search, CheckCircle, XCircle, Loader, Clock } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';

interface Submission {
  id: string;
  urls: string[];
  status: string;
  created_at: string;
  response: any;
}

export default function BingIndexing() {
  const [urls, setUrls] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const apiUrl = `${supabaseUrl}/functions/v1/bing-indexing`;
      const headers = {
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch(apiUrl, { headers });
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions || []);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const urlList = urls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    if (urlList.length === 0) {
      setMessage({ type: 'error', text: 'Please enter at least one URL' });
      return;
    }

    if (urlList.length > 100) {
      setMessage({ type: 'error', text: 'Maximum 100 URLs per submission' });
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = `${supabaseUrl}/functions/v1/bing-indexing`;
      const headers = {
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({ urls: urlList }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage({
          type: 'success',
          text: `Successfully submitted ${data.urlsSubmitted} URLs to Bing for indexing`,
        });
        setUrls('');
        fetchSubmissions();
      } else {
        setMessage({
          type: 'error',
          text: data.error || 'Failed to submit URLs. Please try again.',
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <>
      <SEOHelmet
        title="Bing Indexing Tool - Submit URLs for Instant Indexing"
        description="Submit your website URLs to Bing for immediate indexing using the Bing Webmaster API"
        canonical="/bing-indexing"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Bing Indexing Tool
            </h1>
            <p className="text-xl text-slate-600">
              Submit URLs to Bing for immediate indexing
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="urls" className="block text-sm font-semibold text-slate-700 mb-2">
                  Enter URLs (one per line, max 100)
                </label>
                <textarea
                  id="urls"
                  value={urls}
                  onChange={(e) => setUrls(e.target.value)}
                  placeholder="https://aaronmichaelservices.com/page1&#10;https://aaronmichaelservices.com/page2&#10;https://aaronmichaelservices.com/page3"
                  className="w-full h-48 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none font-mono text-sm"
                  disabled={isSubmitting}
                />
                <p className="mt-2 text-sm text-slate-500">
                  {urls.split('\n').filter(u => u.trim()).length} URLs entered
                </p>
              </div>

              {message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start ${
                    message.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {message.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{message.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Submitting to Bing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Submit to Bing
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Submission History
            </h2>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="w-8 h-8 animate-spin text-blue-600" />
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                <Clock className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                <p>No submissions yet. Submit your first batch of URLs above.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        {submission.status === 'success' ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 mr-2" />
                        )}
                        <span
                          className={`font-semibold ${
                            submission.status === 'success'
                              ? 'text-green-700'
                              : 'text-red-700'
                          }`}
                        >
                          {submission.status === 'success' ? 'Success' : 'Failed'}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500">
                        {formatDate(submission.created_at)}
                      </span>
                    </div>
                    <div className="ml-7">
                      <p className="text-sm text-slate-600 mb-2">
                        <span className="font-semibold">{submission.urls.length}</span> URLs submitted
                      </p>
                      <details className="text-xs text-slate-500">
                        <summary className="cursor-pointer hover:text-slate-700">
                          View URLs
                        </summary>
                        <ul className="mt-2 space-y-1 ml-4 list-disc">
                          {submission.urls.map((url, index) => (
                            <li key={index} className="break-all">
                              {url}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              About Bing Indexing
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Submit up to 100 URLs per request</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>URLs are submitted directly to Bing via their Webmaster API</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Indexing typically occurs within 24-48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All submissions are tracked and logged for your records</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
