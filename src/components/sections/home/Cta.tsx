'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Users, Zap, Shield } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  badge: 'Transform Your Business Today',
  mainTitle: 'Ready to Become a',
  mainTitleHighlight: 'Market Leader?',
  description:
    "Join over 10,000 successful businesses who've revolutionized their operations with Hero. Start your transformation journey today and unlock unprecedented growth potential.",
  primaryCTA: 'Start Free Trial',
  primaryCTAHref: '/contact',
  secondaryCTA: 'View Pricing',
  secondaryCTAHref: '/pricing',
  trustText: 'Trusted by industry leaders and Fortune 500 companies',
  stat1Value: '10K+',
  stat1Label: 'Active Businesses',
  stat2Value: '99.9%',
  stat2Label: 'Uptime SLA',
  stat3Value: '300%',
  stat3Label: 'ROI Average',
  stat4Value: '24/7',
  stat4Label: 'Expert Support',
  feature1Title: '30-Day Free Trial',
  feature1Description: 'Full access to all features, no credit card required',
  feature2Title: 'Enterprise Security',
  feature2Description: 'Bank-level encryption and compliance standards',
  feature3Title: 'Instant Setup',
  feature3Description: 'Go live in under 5 minutes with guided onboarding',
} as const;

type CTAProps = Partial<typeof DEFAULT_CTA>;

export default function Cta(props: CTAProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();

  const stats = [
    { value: config.stat1Value, label: config.stat1Label, icon: Users },
    { value: config.stat2Value, label: config.stat2Label, icon: Shield },
    { value: config.stat3Value, label: config.stat3Label, icon: Zap },
    { value: config.stat4Value, label: config.stat4Label, icon: Sparkles },
  ];

  const features = [
    {
      title: config.feature1Title,
      description: config.feature1Description,
      icon: null,
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
      iconColor: 'bg-yellow-500',
    },
    {
      title: config.feature2Title,
      description: config.feature2Description,
      icon: Shield,
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/10',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      title: config.feature3Title,
      description: config.feature3Description,
      icon: Sparkles,
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-background to-yellow-100/30 dark:from-yellow-900/10 dark:via-background dark:to-yellow-800/10" />
      <div className="absolute top-0 left-1/4 size-96 bg-yellow-400/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-yellow-500/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-yellow-200 dark:border-yellow-800/30 bg-background/90 backdrop-blur-sm shadow-2xl shadow-yellow-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-transparent to-yellow-100/20 dark:from-yellow-900/10 dark:to-yellow-800/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-full text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-8">
                <Sparkles className="size-4 mr-2" />
                <span data-editable="badge">{config.badge}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-foreground">
                <span data-editable="mainTitle">{config.mainTitle}</span>
                <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-400 dark:to-yellow-300 bg-clip-text text-transparent">
                  <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="group text-base px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() => navigate(config.primaryCTAHref)}
                  data-editable-href="primaryCTAHref"
                  data-href={config.primaryCTAHref}
                >
                  <span data-editable="primaryCTA">{config.primaryCTA}</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4 border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                  onClick={() => navigate(config.secondaryCTAHref)}
                  data-editable-href="secondaryCTAHref"
                  data-href={config.secondaryCTAHref}
                >
                  <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  <span data-editable="trustText">{config.trustText}</span>
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Company logos placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gradient-to-r from-yellow-200/50 to-yellow-300/30 dark:from-yellow-800/30 dark:to-yellow-700/20 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                        <Icon className="size-6 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        <span data-editable={`stat${index + 1}Value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="space-y-2">
                  <div
                    className={`size-12 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}
                  >
                    {Icon ? (
                      <Icon className={`size-6 ${feature.iconColor}`} />
                    ) : (
                      <div className={`size-6 rounded-full ${feature.iconColor}`} />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
