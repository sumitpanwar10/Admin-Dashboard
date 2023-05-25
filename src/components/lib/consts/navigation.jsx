import {
	HiOutlineViewGrid,
	HiOutlineMusicNote,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Sounds',
		label: 'Sounds',
		path: '/Sounds',
		icon: <HiOutlineMusicNote />
	},
	
	{
		key: 'messages',
		label: 'Messages',
		path: '',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '',
		icon: <HiOutlineQuestionMarkCircle />
	}
]