'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';

	const toggleTheme = () => {
		setTheme(isDark ? 'light' : 'dark');
	};

	return (
		<Button
			onClick={toggleTheme}
			variant="ghost"
			size="icon"
			className="relative transition-all"
		>
			<Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
