import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitQuoteRequest } from "@/lib/api";
import { SERVICES } from "@/content/site";

const initial = { name: "", phone: "", email: "", service: "", message: "" };

export const QuoteForm = () => {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitQuoteRequest(form);
      toast.success("Request received. We'll call you within one business day.");
      setForm(initial);
    } catch (err) {
      toast.error(err.message || "Something went wrong — please call us instead.");
    } finally {
      setSending(false);
    }
  };

  const field = "h-12 border-white/15 bg-charcoal2 text-bone placeholder:text-zinc-500 focus-visible:ring-ember";

  return (
    <form data-testid="quote-request-form" onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="qf-name" className="text-xs uppercase tracking-[0.2em] text-zinc-400">Name *</Label>
          <Input id="qf-name" data-testid="quote-form-name-input" required value={form.name} onChange={set("name")} placeholder="Your full name" className={field} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-phone" className="text-xs uppercase tracking-[0.2em] text-zinc-400">Phone *</Label>
          <Input id="qf-phone" data-testid="quote-form-phone-input" required type="tel" value={form.phone} onChange={set("phone")} placeholder="(555) 000-0000" className={field} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="qf-email" className="text-xs uppercase tracking-[0.2em] text-zinc-400">Email</Label>
        <Input id="qf-email" data-testid="quote-form-email-input" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={field} />
      </div>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.2em] text-zinc-400">Service needed</Label>
        <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
          <SelectTrigger data-testid="quote-form-service-select" className={`w-full ${field}`}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="border-white/10 bg-charcoal text-bone">
            {SERVICES.map((s) => (
              <SelectItem key={s.id} value={s.title} className="focus:bg-steel focus:text-bone">{s.title}</SelectItem>
            ))}
            <SelectItem value="Not sure yet" className="focus:bg-steel focus:text-bone">Not sure yet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="qf-message" className="text-xs uppercase tracking-[0.2em] text-zinc-400">Project description *</Label>
        <Textarea id="qf-message" data-testid="quote-form-message-input" required rows={5} value={form.message} onChange={set("message")} placeholder="Tell us about the site, the work you need, and your ideal timeline." className="border-white/15 bg-charcoal2 text-bone placeholder:text-zinc-500 focus-visible:ring-ember" />
      </div>

      <button
        type="submit"
        data-testid="quote-form-submit-button"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2.5 bg-ember px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-emberdark disabled:opacity-60"
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {sending ? "Sending…" : "Send Request"}
      </button>
      <p className="text-xs text-zinc-500">No obligation. Your details are only used to prepare your quote.</p>
    </form>
  );
};
