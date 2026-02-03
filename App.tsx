import React, { useState } from 'react';
import { PACKAGES, COMMON_BENEFITS } from './constants.ts';
import { Button } from './components/Button.tsx';
import { getAiStrategyRecommendation } from './services/geminiService.ts';

const REVIEWS = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechSphere",
    text: "Do Digital Marketing transformed our YouTube presence. Their SEO strategy is precise and effective. We saw a 300% increase in website traffic within 3 months.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Lifestyle Content Creator",
    text: "I was struggling with consistency and editing. Their content calendar and video ideation took the pressure off, allowing me to focus on my community.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Marketing Director",
    text: "The lead generation from YouTube has been incredible. They don't just post videos; they build a sales funnel. Highly professional team.",
    rating: 5
  }
];

const CASE_STUDIES = [
  {
    category: "Lifestyle & Growth",
    metric: "2.5M",
    label: "Lifetime Views",
    subscribers: "+1.8K",
    watchTime: "7.2K",
    description: "Exponential growth achieved through strategic SEO and viral content hooks. We optimized the channel for long-term algorithmic retention.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
  },
  {
    category: "Automotive Business",
    metric: "51.3K",
    label: "Targeted Views",
    subscribers: "+76",
    watchTime: "111.8",
    description: "Niche lead generation for a car dealership. Every view was crafted to reach high-intent local buyers, resulting in direct showroom visits.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  }
];

const App: React.FC = () => {
  const [userGoal, setUserGoal] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState<{plan: string, reasoning: string} | null>(null);

  const handleAiConsult = async () => {
    if (!userGoal.trim()) return;
    setAiLoading(true);
    try {
      const recommendation = await getAiStrategyRecommendation(userGoal);
      setAiRecommendation(recommendation);
    } catch (err) {
      console.error("AI Consult Error:", err);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-red-100 selection:text-red-900 bg-white antialiased">
      {/* Header/Hero Section */}
      <header className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-b from-red-50 to-transparent -z-10 blur-3xl opacity-60"></div>
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-bold mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Professional YouTube Management
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Scale Your YouTube <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-600">
              Into a Business Engine
            </span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Premium offerings, proven expertise, and consistent results. Powered by <span className="text-red-600 font-bold">Do Digital Marketing</span>.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              View Packages
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:border-red-600" onClick={() => window.open('https://www.dodigital.marketing', '_blank')}>Explore Our Agency</Button>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
          <div className="space-y-1">
            <div className="text-xl md:text-2xl font-black text-gray-900 leading-tight uppercase tracking-tighter">Your channel partner</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-black text-gray-900">10M+</div>
            <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Views Generated</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-black text-gray-900">₹5,000</div>
            <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Monthly Ad Credit*</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-black text-gray-900">24/7</div>
            <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Strategic Support</div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full -ml-48 -mb-48"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Proven Results</h2>
            <p className="text-gray-400 max-w-lg mx-auto font-medium italic">Verified data from our active client portfolio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-gray-900/50 backdrop-blur-xl border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-500 hover:border-red-500/30">
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h4 className="text-red-500 font-black uppercase tracking-widest text-xs mb-2">{study.category}</h4>
                        <h3 className="text-2xl font-black tracking-tight text-white/90 italic">Confidential Project</h3>
                      </div>
                      <div className="bg-red-600 text-white px-4 py-1.5 rounded-2xl font-black text-[10px] shadow-lg uppercase tracking-widest">
                        Verified
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/5 p-4 rounded-3xl border border-white/5 text-center">
                        <div className="text-2xl font-black text-white">{study.metric}</div>
                        <div className="text-[9px] uppercase tracking-widest text-gray-500 font-black mt-1">Total Views</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-3xl border border-white/5 text-center">
                        <div className="text-2xl font-black text-white">{study.watchTime}</div>
                        <div className="text-[9px] uppercase tracking-widest text-gray-500 font-black mt-1">Hours Watched</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-3xl border border-white/5 text-center">
                        <div className="text-2xl font-black text-white">{study.subscribers}</div>
                        <div className="text-[9px] uppercase tracking-widest text-gray-500 font-black mt-1">Subscribers</div>
                      </div>
                    </div>

                    <p className="text-gray-400 font-medium leading-relaxed text-sm italic">
                      "{study.description}"
                    </p>
                  </div>
                  <div className="h-72 overflow-hidden relative">
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                       <span className="bg-black/60 backdrop-blur-xl px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border border-white/10 shadow-2xl">Original Screenshot Blurred</span>
                    </div>
                    <img 
                      src={study.image} 
                      alt="Blurred Analytics" 
                      className="w-full h-full object-cover opacity-20 blur-3xl grayscale transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Strategy Consult Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <svg className="w-24 h-24 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4 tracking-tight">Free AI Strategy Recommendation</h2>
            <p className="text-gray-500 font-medium">Tell us your channel goal, and our Gemini AI will pick the perfect plan for you.</p>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <textarea 
                className="w-full h-32 px-6 py-4 rounded-[2rem] border-2 border-gray-200 focus:border-red-600 outline-none transition-all font-semibold resize-none text-gray-700 bg-white"
                placeholder="Example: I want to build a personal brand for my car dealership..."
                value={userGoal}
                onChange={(e) => setUserGoal(e.target.value)}
              />
            </div>
            
            <Button 
              fullWidth 
              onClick={handleAiConsult}
              disabled={aiLoading || !userGoal.trim()}
              className="py-5 text-xl"
            >
              {aiLoading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing Goals...
                </div>
              ) : 'Get Recommendation'}
            </Button>

            {aiRecommendation && (
              <div className="mt-8 p-8 bg-white border border-red-100 rounded-[2rem] animate-in fade-in shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">AI Result</div>
                  <h4 className="text-xl font-black">Recommended: <span className="text-red-600">{aiRecommendation.plan}</span></h4>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed italic">"{aiRecommendation.reasoning}"</p>
                <div className="mt-6 flex justify-end">
                  <Button variant="outline" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                    Explore Plan
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gray-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">Packages That Scale</h2>
            <p className="text-gray-500 max-w-lg mx-auto font-medium">Monthly strategic plans with expert video editing and SEO optimization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative flex flex-col p-8 rounded-[3rem] border transition-all duration-500 group ${
                  pkg.isPopular 
                    ? 'bg-white border-red-600 ring-4 ring-red-50 shadow-xl scale-105 z-10' 
                    : 'bg-white border-gray-100 hover:border-red-200 hover:shadow-2xl shadow-sm'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl ring-4 ring-white">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-2 text-gray-900 tracking-tight">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-gray-900">₹{pkg.price}</span>
                    <span className="text-gray-400 font-bold text-sm">/mo</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed font-semibold min-h-[40px]">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-6 mb-8 flex-1">
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-100">
                    <div className="text-center p-4 rounded-3xl bg-gray-50 transition-colors group-hover:bg-red-50/50">
                      <div className="text-2xl font-black text-red-600">{pkg.videosTotal}</div>
                      <div className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Total Videos</div>
                    </div>
                    <div className="text-center p-4 rounded-3xl bg-gray-50 transition-colors group-hover:bg-red-50/50">
                      <div className="text-2xl font-black text-red-600">{pkg.commitment}</div>
                      <div className="text-[9px] uppercase tracking-widest text-gray-400 font-black">Commitment</div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-300'}`}>
                        <div className={`mt-0.5 p-0.5 rounded-full ${feature.included ? (feature.highlight ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600') : 'bg-gray-100 text-gray-300'}`}>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={feature.included ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}></path></svg>
                        </div>
                        <span className={`${feature.highlight ? 'font-black text-gray-900' : 'font-semibold'} ${!feature.included ? 'line-through' : ''}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  fullWidth 
                  variant={pkg.isPopular ? 'primary' : 'outline'} 
                  onClick={() => window.open(pkg.paymentLink, '_blank')}
                  className="py-4 text-lg tracking-tight"
                >
                  Get Started Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-6 font-bold text-gray-400 text-[10px] uppercase tracking-widest">© 2024 TubeBoost Pro & Do Digital Marketing. All rights reserved.</p>
          <div className="h-px w-24 bg-gray-100 mx-auto mb-8"></div>
          <p className="text-gray-500 text-sm font-bold">
            Powered by <a href="https://www.dodigital.marketing" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-all underline underline-offset-8 decoration-2 decoration-red-100 hover:decoration-red-600">Do Digital Marketing</a>
          </p>
        </div>
      </footer>

      {/* WhatsApp Link */}
      <a 
        href="https://wa.me/917217873028" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float group px-6 py-4 rounded-full flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-[100] fixed bottom-8 right-8"
      >
        <svg className="w-8 h-8 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="font-black tracking-tight hidden sm:inline uppercase text-sm">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default App;