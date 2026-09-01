"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { loginAction } from "../_actions/authAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') ?? ''
  const [state, action, pending] = useActionState(loginAction.bind(null, redirectTo), false);

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(state.message || "login successfully");
    }
    if (!state.success) {
      toast.error(state.error || "login failed");
    }
  }, [state]);

  
  return (
    <form className="w-full max-w-105" action={action}>
      <Card className="p-6 sm:p-8 shadow-lg border-teal-600/10 dark:border-teal-500/20 space-y-6">
        <div className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              defaultValue={"arafat3@gmail.com"}
              className="h-12 text-base rounded-md"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="h-12 text-base rounded-md"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Button
            type="submit"
            className="w-full cursor-pointer h-12 text-base bg-teal-600 hover:bg-teal-700 text-white transition-colors"
          >
            {pending ? <>{<Spinner />} logging...</> : "Login"}
          </Button>

          <div className="flex justify-end">
            <p className="w-fit  justify-end">
              {`Don't have an account? `}

              <Link
                href={"/auth/register"}
                className="text-teal-600 dark:text-teal-400"
              >
                register
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default LoginForm;
