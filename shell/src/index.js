import("./App");

window.profile.get('./Header').then((module) => {
	const Header = module().default;

	new Header({
		target: document.getElementById("profile"),
	});
});