import {
  ArrowUpRight,
  Award,
  FileBadge2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface ProfileCertificatesProps {
  certificates: string[];
}

export default function ProfileCertificates({
  certificates,
}: ProfileCertificatesProps) {
  if (!certificates?.length) {
    return null;
  }

  return (
    <Card className="rounded-2xl border-slate-200 shadow-sm dark:border-border">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              bg-[#E99A18]/10
              text-[#D58A00]
            "
          >
            <FileBadge2 className="h-5 w-5" />
          </div>

          <div>
            <CardTitle className="text-base">
              Certificates
            </CardTitle>

            <CardDescription>
              Your professional certificates
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div
              key={`${certificate}-${index}`}
              className="
                flex items-center justify-between
                rounded-xl border
                bg-muted/20 p-4
                transition-colors
                hover:border-[#E99A18]/30
                hover:bg-[#E99A18]/5
              "
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#E99A18]/10
                    text-[#D58A00]
                  "
                >
                  <Award className="h-4 w-4" />
                </div>

                <p className="truncate text-sm font-medium">
                  {certificate}
                </p>
              </div>

              <ArrowUpRight
                className="
                  ml-2 h-4 w-4
                  shrink-0
                  text-muted-foreground
                "
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}