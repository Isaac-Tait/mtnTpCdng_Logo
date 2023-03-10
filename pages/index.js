//import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => (
  <div className="heropattern-leaf-neutral-100 h-screen">
    <div>
      <Header />
    </div>
    <div className="mt-4 mx-2 md:max-w-6xl md:mx-auto bg-slate-200 rounded-xl">
      <p className="text-center">Posts</p>
    </div>
    <div className="fixed bottom-0 w-full">
      <Footer />
    </div>
  </div>
);

export default Index;
