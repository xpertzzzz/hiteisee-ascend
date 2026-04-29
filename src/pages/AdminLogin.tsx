import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { isLoggedIn, login } from "@/lib/content";
import { Lock, User } from "lucide-react";
import { toast } from "sonner";

const AdminLogin = () => {
  const nav = useNavigate();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");

  if (isLoggedIn()) return <Navigate to="/admin" replace />;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(u.trim(), p)) {
      toast.success("Welcome back, admin.");
      nav("/admin");
    } else {
      setErr("Invalid credentials. Hint: admin / admin");
    }
  };

  return (
    <Layout>
      <section className="bg-hero min-h-[80vh] flex items-center">
        <div className="container-custom max-w-md">
          <div className="bg-card border border-border rounded-2xl shadow-elevated p-8 reveal in-view">
            <div className="text-center mb-6">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-cta-grad flex items-center justify-center mb-4 shadow-glow-green">
                <Lock className="text-primary-foreground" size={22} />
              </div>
              <h1 className="font-display text-3xl font-semibold">Admin Login</h1>
              <p className="text-sm text-muted-foreground mt-2">Sign in to manage site content.</p>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  value={u}
                  onChange={(e) => setU(e.target.value)}
                  placeholder="Username"
                  className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  value={p}
                  onChange={(e) => setP(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
                  required
                />
              </div>
              {err && <p className="text-xs text-destructive">{err}</p>}
              <button
                type="submit"
                className="w-full rounded-full bg-accent-grad px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.02]"
              >
                Sign In
              </button>
              <p className="text-center text-xs text-muted-foreground pt-2">
                Default credentials: <span className="font-mono text-foreground">admin / admin</span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminLogin;
