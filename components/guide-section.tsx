'use client';

import { GUIDE_STEPS } from '@/lib/guide-data';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function GuideSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section className="border-t border-border py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Panduan Penggunaan</h2>
          <p className="text-muted-foreground">Ikuti langkah demi langkah untuk memaksimalkan aplikasi POS Panglima</p>
        </div>

        <div className="space-y-3">
          {GUIDE_STEPS.map((step) => (
            <Card
              key={step.number}
              className="overflow-hidden border-border transition-all hover:border-primary/50"
            >
              <button
                onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                className="w-full px-6 py-4 text-left hover:bg-muted/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-1 items-start gap-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        <span className="mr-2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                          {step.number}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      expandedStep === step.number ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedStep === step.number && (
                <div className="border-t border-border bg-muted/30 px-6 py-4">
                  <ol className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-foreground">
                        <span className="flex-shrink-0 font-semibold text-primary">{idx + 1}.</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-8 rounded-lg bg-accent/10 p-6">
          <h3 className="mb-3 font-semibold text-foreground">💡 Tips Penting</h3>
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Pastikan koneksi internet stabil saat melakukan sinkronisasi data</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Backup data secara berkala untuk menghindari kehilangan data penting</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Gunakan password yang kuat dan jangan share kredensial Anda</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Update aplikasi secara berkala untuk fitur terbaru dan keamanan</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
