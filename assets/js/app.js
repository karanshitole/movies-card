const cl = console.log;


const postMArr = [
    {
	    movie: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
		
		rating: 7,
		
		ovreview: `Writing a review for a sequel like “Fast X” feels pretty pointless. 
			 It’s the type  adrenaline-fueled blockbuster that rabid fans will eagerly shell out money to see and want to love, 
			 snobby critics will begrudgingly watch  a chip on their shoulder combined with `
    }

]
let result = ``;
for(let i=0;i<postMArr.length;i++){
	//cl(postMArr[i].movie)
	//cl(postMArr[i].rating)
	//cl(postMArr[i].ovreview)
	result += `
	            <div class="col-md-3">
	          <div class="card mb-4">
             <figure class="moviecard">
		       <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg">
		       <figcaption>
		   <div class="titleinfo">
		    <div class="row">
			 <div class="col-10">
			  <h4>Harry Potter and Prisoner of Azkaban</h4>
			 </div>
			 <div class="col-2">
			  <span class="rating">7</span>
			 </div>
			</div>
		   </div>
		    <div class="overview">
			 <h5>Writing a review for a sequel like “Fast X” feels pretty pointless. 
			 It’s the type of adrenaline-fueled blockbuster that rabid fans will eagerly shell out money to see and want to love, 
			 while snobby critics will begrudgingly watch with a chip on their shoulder combined with a predetermined disdain for whatever will unfold
			 </h5>
			</div>
		  </figcaption>
		 </figure>
	   </div>
	    <div class="card mb-4">
	     <figure class="moviecard">
		  <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg">
		  <figcaption>
		   <div class="titleinfo">
		    <div class="row">
			 <div class="col-10">
			  <h4>Harry Potter and Prisoner of Azkaban</h4>
			 </div>
			 <div class="col-2">
			  <span class="rating">7</span>
			 </div>
			</div>
		   </div>
		    <div class="overview">
			 <h5>Writing a review for a sequel like “Fast X” feels pretty pointless. 
			 It’s the type of adrenaline-fueled blockbuster that rabid fans will eagerly shell out money to see and want to love, 
			 while snobby critics will begrudgingly watch with a chip on their shoulder combined with a predetermined disdain for whatever will unfold
			 </h5>
			</div>
		  </figcaption>
		 </figure>
	   </div>
	   
	  </div>
	  </div>`
}

const moviescontainer = document.getElementById("moviescontainer")
moviecontainer.innerHTML = result;