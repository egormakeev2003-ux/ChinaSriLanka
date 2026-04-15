import { useState } from 'react';
import { ChevronLeft, ChevronRight, Ship, TrendingUp, DollarSign, Users, Building2, AlertTriangle, Scale, Globe, Anchor, Route, ArrowRightLeft, CheckCircle, Calendar, User, Heart, Handshake } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { InfographicCard } from './InfographicCard';
import { StatCounter } from './StatCounter';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Slide {
  title: string;
  content: React.ReactNode;
}

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Donor and Recipient of Humanitarian Aid",
      content: (
        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
          {/* Background Images */}
          <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-20">
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761958150660-0c3691fda95d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGluYSUyMGZsYWclMjByZWR8ZW58MXx8fHwxNzc2Mjg5NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="China"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764555241048-f1fc72201704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWQlMjBoYW5kcyUyMGhlbHBpbmd8ZW58MXx8fHwxNzc2Mjg5NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Humanitarian aid"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589534345827-e619f9b2dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGJlYWNoJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NjI4ODg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sri Lanka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-500/90"></div>
          
          {/* Animated decorative elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-7xl font-bold mb-8 text-white drop-shadow-2xl">
                Donor and Recipient of Humanitarian Aid
              </h1>
              <div className="h-2 w-64 mx-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl text-white font-semibold mb-16 drop-shadow-lg"
            >
              The Case of China and Sri Lanka
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30 shadow-xl">
                  <Globe className="w-7 h-7 text-white" />
                  <span className="text-2xl font-semibold text-white">Global Impact</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30 shadow-xl">
                  <ArrowRightLeft className="w-7 h-7 text-white" />
                  <span className="text-2xl font-semibold text-white">International Relations</span>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <div className="flex items-center gap-3 bg-white/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/40">
                  <User className="w-6 h-6 text-white" />
                  <span className="text-xl font-semibold text-white">Presented by Egor Makeev</span>
                </div>
                <div className="flex items-center gap-3 bg-white/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/40">
                  <Calendar className="w-6 h-6 text-white" />
                  <span className="text-xl font-semibold text-white">April 16, 2026</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Introduction",
      content: (
        <div className="h-full grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Role of Humanitarian Aid
            </h2>
            <div className="space-y-6 text-2xl">
              <p className="leading-relaxed">
                Humanitarian aid today plays an important role not only in addressing social and economic problems, but also in shaping international relations.
              </p>
              <p className="leading-relaxed">
                This can be clearly illustrated by the example of China as a donor and Sri Lanka as a recipient country.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758876202877-30b2c505ad9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMGNvbm5lY3Rpb25zfGVufDF8fHx8MTc3NjI4ODg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global connections"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "China as a Donor",
      content: (
        <div className="space-y-8 h-full flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
          >
            China as a Major Donor
          </motion.h2>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1775464081312-81bf0fa8578f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGluYSUyMGluZnJhc3RydWN0dXJlJTIwbW9kZXJuJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzc2Mjg4ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="China infrastructure"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed">
                Over the past decades, China has become one of the largest donors in the developing world.
              </p>
              <div className="bg-gradient-to-br from-red-500 to-orange-500 p-6 rounded-2xl shadow-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Route className="w-10 h-10" />
                  <h3 className="text-3xl font-bold">Belt and Road Initiative</h3>
                </div>
                <ul className="space-y-3 text-xl">
                  <li className="flex items-center gap-3">
                    <Ship className="w-6 h-6" />
                    Construction of ports
                  </li>
                  <li className="flex items-center gap-3">
                    <Building2 className="w-6 h-6" />
                    Roads and railways
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6" />
                    Energy facilities
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-600 italic">
                Aimed at stimulating economic growth and expanding China's global influence
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sri Lanka as a Recipient",
      content: (
        <div className="space-y-8 h-full flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
          >
            Sri Lanka as a Recipient
          </motion.h2>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="space-y-6 flex flex-col justify-center">
              <p className="text-2xl leading-relaxed">
                Sri Lanka is a vivid example of a recipient country of Chinese assistance.
              </p>
              <div className="grid gap-4">
                <InfographicCard
                  icon={DollarSign}
                  title="Substantial Loans"
                  description="Large-scale investments and financial support"
                  color="bg-gradient-to-br from-green-500 to-emerald-600"
                  delay={0.2}
                />
                <InfographicCard
                  icon={Anchor}
                  title="Hambantota Port"
                  description="Major infrastructure construction project"
                  color="bg-gradient-to-br from-teal-500 to-cyan-600"
                  delay={0.4}
                />
                <InfographicCard
                  icon={Building2}
                  title="Infrastructure"
                  description="Roads, airports, and development projects"
                  color="bg-gradient-to-br from-blue-500 to-indigo-600"
                  delay={0.6}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589534345827-e619f9b2dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGJlYWNoJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NjI4ODg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sri Lanka landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <p className="text-white text-2xl font-semibold">Contributing to economic development and modernization</p>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Complex Consequences",
      content: (
        <div className="space-y-8 h-full flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            Complex Consequences
          </motion.h2>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJ0JTIwY3Jpc2lzJTIwZmluYW5jaWFsJTIwcHJvYmxlbXxlbnwxfHx8fDE3NzYyODg4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial crisis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent"></div>
            </motion.div>
            <div className="space-y-6 flex flex-col justify-center">
              <p className="text-2xl leading-relaxed">
                However, the interaction between donor and recipient also has complex consequences:
              </p>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-10 h-10 text-orange-600" />
                  <h3 className="text-3xl font-bold text-orange-900">Key Issues:</h3>
                </div>
                <ul className="space-y-3 text-xl text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <span>Loans with relatively high interest rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📉</span>
                    <span>Difficulties in repayment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <span>"Debt dependence"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏢</span>
                    <span>Transfer of control over strategic assets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <span>Political concessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Additional Challenges",
      content: (
        <div className="space-y-8 h-full flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
          >
            Additional Challenges
          </motion.h2>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="space-y-6 flex flex-col justify-center">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-12 h-12" />
                  <h3 className="text-3xl font-bold">China's Aid Model</h3>
                </div>
                <ul className="space-y-4 text-xl">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Use of Chinese companies and labor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Limited participation of local population</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Reduced long-term benefits for national economy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Domestic dissatisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Questions about project effectiveness</span>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663058480199-acbc638bf21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3NjIxMjMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction workers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Key Takeaways",
      content: (
        <div className="space-y-8 h-full flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Key Takeaways
          </motion.h2>
          <p className="text-2xl leading-relaxed">
            The example of China and Sri Lanka shows that humanitarian and economic assistance is not only a form of support, but also an instrument of influence.
          </p>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-2xl shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <TrendingUp className="w-16 h-16 mb-4" />
                <h3 className="text-4xl font-bold mb-4">Donor Gains</h3>
                <p className="text-2xl leading-relaxed">Opportunity to strengthen presence and role in the region</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <AlertTriangle className="w-16 h-16 mb-4" />
                <h3 className="text-4xl font-bold mb-4">Recipient Risks</h3>
                <p className="text-2xl leading-relaxed">Receives resources but risks becoming dependent</p>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <div className="space-y-8 h-full flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            Conclusion
          </motion.h2>
          <div className="max-w-4xl">
            <p className="text-2xl leading-relaxed mb-8 text-center">
              Relations between donor and recipient require:
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <InfographicCard
                icon={Scale}
                title="Balance"
                description="Balance of interests"
                color="bg-gradient-to-br from-blue-500 to-cyan-600"
                delay={0.2}
              />
              <InfographicCard
                icon={Globe}
                title="Transparency"
                description="Open communication"
                color="bg-gradient-to-br from-purple-500 to-pink-600"
                delay={0.4}
              />
              <InfographicCard
                icon={TrendingUp}
                title="Long-term"
                description="Sustainable approach"
                color="bg-gradient-to-br from-green-500 to-teal-600"
                delay={0.6}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/50 backdrop-blur-sm border-2 border-gray-200 p-8 rounded-2xl shadow-xl">
                <p className="text-2xl text-gray-700 text-center italic leading-relaxed">
                  Only under these conditions can aid truly contribute to sustainable development rather than create new challenges.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl h-64"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770681674230-55830ded1363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlJTIwc2NhbGVzJTIwanVzdGljZSUyMGZhaXJuZXNzfGVufDF8fHx8MTc3NjI4ODg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Balance and fairness"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      ),
    },
    {
      title: "Thank You",
      content: (
        <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543980932-b5fc649a8000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFuayUyMHlvdSUyMGF1ZGllbmNlJTIwYXBwbGF1c2V8ZW58MXx8fHwxNzc2Mjg5NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Thank you"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-500/90"></div>
          
          {/* Animated decorative elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.3, 1, 1.3],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-400/30 rounded-full blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative z-10 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <Heart className="w-32 h-32 mx-auto mb-8 text-white drop-shadow-2xl" />
              <h1 className="text-8xl font-bold mb-6 text-white drop-shadow-2xl">
                Thank You
              </h1>
              <p className="text-5xl text-white/90 font-semibold drop-shadow-lg mb-8">
                for Your Attention
              </p>
              <div className="h-2 w-96 mx-auto bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 rounded-full"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex justify-center gap-8 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 backdrop-blur-md px-10 py-5 rounded-2xl border-2 border-white/40 shadow-2xl"
                >
                  <Handshake className="w-16 h-16 text-white mx-auto mb-3" />
                  <p className="text-white text-2xl font-semibold">Partnership</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 backdrop-blur-md px-10 py-5 rounded-2xl border-2 border-white/40 shadow-2xl"
                >
                  <Globe className="w-16 h-16 text-white mx-auto mb-3" />
                  <p className="text-white text-2xl font-semibold">Global Impact</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 backdrop-blur-md px-10 py-5 rounded-2xl border-2 border-white/40 shadow-2xl"
                >
                  <TrendingUp className="w-16 h-16 text-white mx-auto mb-3" />
                  <p className="text-white text-2xl font-semibold">Development</p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-white/80 text-xl italic"
              >
                Questions and Discussion
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl h-full bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between px-12 py-6 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="lg"
          disabled={currentSlide === 0}
          className="flex items-center gap-2 hover:bg-blue-50 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </Button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'
                  : 'w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-600 font-semibold">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="lg"
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 hover:bg-blue-50 transition-all"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}