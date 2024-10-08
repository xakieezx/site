export interface ProjectCardImage {
	srcDesktop: string;
	srcMobile: string;
	caption: string;
}

export interface ProjectCardDetails {
	title: string;
	description: string;
	footer1: string;
	footer2: string;
	images: ProjectCardImage[];
}

export interface ProjectCardConfig {
	[key: string]: ProjectCardDetails;
}

// empty srcDesktop and srcMobile will load image-placholder.svg
export const projectCardConfig: ProjectCardConfig = {
	eazygas: {
		title: 'EazyGas',
		description: 'Gas Inventory Management',
		footer1: 'Chemical Management Unit (CMU)',
		footer2: 'Universiti Teknologi Malaysia',
		images: [
			{
				srcDesktop: '/project/eazygas/desktop/signin.png',
				srcMobile: '/project/eazygas/mobile/signin.png',
				caption: 'Sign in page',
			},
			{
				srcDesktop: '/project/eazygas/desktop/signup.png',
				srcMobile: '/project/eazygas/mobile/signup.png',
				caption: 'Sign up page',
			},
			{
				srcDesktop: '/project/eazygas/desktop/forgotpassword.png',
				srcMobile: '/project/eazygas/mobile/forgotpassword.png',
				caption: 'Forgot password page',
			},
			{
				srcDesktop: '/project/eazygas/desktop/dashboard.mp4',
				srcMobile: '/project/eazygas/mobile/dashboard.mp4',
				caption: 'Dashboard preview',
			},
		],
	},
};
