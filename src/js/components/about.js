function aboutPage() {
    const container = document.createElement("div");
    
    container.innerHTML = `
            <section class="bg-secondary about d-flex justify-content-center align-items-center">
				<div class="container">
					<h1 class="heading text-center">
						About
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis orci mollis velit tincidunt, non viverra nisl efficitur. Vestibulum in suscipit lorem, eu aliquet quam. Curabitur volutpat, purus nec consectetur dignissim, ante massa pretium odio, vitae condimentum diam lacus eget turpis. Vestibulum molestie velit sit amet viverra semper. Sed fringilla volutpat ultricies. Nam id porta dolor. Vestibulum placerat erat vel magna scelerisque, vitae fringilla ligula commodo. Aliquam vulputate nunc dolor, ac porttitor nulla congue ac. Nullam convallis nunc sit amet lectus ornare, ac congue ante venenatis. Etiam tincidunt nisl eu turpis fringilla, id ultrices elit pharetra. Quisque varius maximus elementum.
					</p>
				</div>
			</section>`

    return container;
}

export default aboutPage;