function homePage() {
	
	const container = document.createElement("div");
	container.innerHTML = `
	<section class="hero bg-secondary">
				<div class="container text-center py-4">
					<h1 class="heading">Restaurant</h1>
					<p class="">Inspired by ocean gods, crafted for you.</p>
					<button class="btn btn-danger p-3">Make your first order NOW!</button>
					<div class="img-block d-flex mt-3 justify-content-center">
						<img src="https://placehold.co/800x500" class="" alt="">
					</div>
				</div>
			</section>
			<section class="menu bg-dark">
				<div class="container text-center py-4">
					<h1 class="mt-5">Legendary Tastes from the Deep</h1>
					<p class="mt-5">Behold a curated selection of the sea’s most mythical creations. These featured dishes represent the finest flavors from our enchanted ocean menu — each with a tale to tell and a taste that lingers beyond this realm.</p>
					<div class="row my-5 gap-5">
						<div class="col d-flex justify-content-center">
							<div class="card" style="width: 18rem;">
								<img src="https://placehold.co/100x60" class="card-img-top" alt="">
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>
							</div>
						</div>
						<div class="col d-flex justify-content-center">
							<div class="card" style="width: 18rem;">
								<img src="https://placehold.co/100x60" class="card-img-top" alt="">
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>
							</div>
						</div>
						<div class="col d-flex justify-content-center">
							<div class="card" style="width: 18rem;">
								<img src="https://placehold.co/100x60" class="card-img-top" alt="">
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>`;

	return container;

};

export default homePage;