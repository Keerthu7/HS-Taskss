import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    return (
           <div>
             <Header />
           <section className="flex px-10 py-48  bg-image ">
            <h1 className=" text-5xl font-hero-font  px-8">Hi ,<br /> I'm Keerthuu
                <p className="text-3xl px-140"> Welcome to a Photography</p>
            </h1>
            
        </section>
        <Footer />
</div>
       
    )
}

export default Home;
