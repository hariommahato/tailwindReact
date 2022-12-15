import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />

      <div className='bg-white md:text-yellow-500 grid grid-cols-3 text-purple-700  gap-8 py-3  sm:text-red-700 flex flex-col' >
      <div className='border'>oner Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae suscipit tenetur eius neque ullam voluptate eaque inventore distinctio, eos repellat sed unde provident modi! Soluta odio quisquam eos hic.</div>
      <div className='border'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aspernatur expedita itaque praesentium, culpa vitae officiis deserunt ratione minus dicta. Veritatis qui perspiciatis quisquam? Eius id fuga in illum reprehenderit?</div>
      <div className='border'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum hic distinctio et minima quae minus deleniti vitae earum necessitatibus quaerat. Dignissimos possimus rerum exercitationem labore numquam culpa vitae vel alias?</div>
      </div>
    </div>
  );
}

export default App;
