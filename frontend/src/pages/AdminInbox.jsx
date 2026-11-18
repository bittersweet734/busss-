import { useState } from "react";
import { Loader2, LockKeyhole } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { fetchQuoteRequests } from "@/lib/api";

const AdminInbox = () => {
  const [passcode, setPasscode] = useState("");
  const [rows, setRows] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      setRows(await fetchQuoteRequests(passcode));
    } catch (e) {
      setRows(null);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="admin-inbox-page" className="mx-auto max-w-5xl px-5 py-40 lg:px-10">
      <SEO title="Quote Inbox | BuildRight Construction" description="Admin quote request inbox." />
      <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Quote inbox</h1>

      <div className="mt-8 flex max-w-md items-end gap-3">
        <div className="flex-1 space-y-2">
          <label htmlFor="admin-passcode" className="text-xs uppercase tracking-[0.2em] text-zinc-400">Admin passcode</label>
          <Input
            id="admin-passcode"
            data-testid="admin-passcode-input"
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load()}
            className="h-12 border-white/15 bg-charcoal2 text-bone"
            placeholder="Enter passcode"
          />
        </div>
        <button
          data-testid="admin-open-inbox-button"
          onClick={load}
          disabled={loading || !passcode}
          className="inline-flex h-12 items-center gap-2 bg-ember px-6 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-emberdark disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LockKeyhole className="h-4 w-4" />}
          Open
        </button>
      </div>

      {error && <p role="alert" data-testid="admin-inbox-error" className="mt-4 text-sm text-red-400">{error}</p>}

      {!rows && !error && (
        <p className="mt-6 max-w-md text-sm text-zinc-500">Enter the admin passcode to view submitted quote requests. This page is not linked anywhere on the public site.</p>
      )}

      {rows && (
        <div className="mt-10 space-y-4" data-testid="admin-inbox-list">
          {rows.length === 0 && <p className="text-sm text-zinc-500">No submissions yet.</p>}
          {rows.map((q) => (
            <article key={q.id} data-testid={`admin-quote-${q.id}`} className="border border-white/10 bg-charcoal p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-display text-lg font-bold">{q.name}</p>
                <p className="text-xs text-zinc-500">{new Date(q.created_at).toLocaleString()}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                <a href={`tel:${q.phone}`} className="font-bold text-ember">{q.phone}</a>
                {q.email && <a href={`mailto:${q.email}`} className="break-all text-zinc-300">{q.email}</a>}
                {q.service && <span className="border border-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300">{q.service}</span>}
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-zinc-400">{q.message}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminInbox;
