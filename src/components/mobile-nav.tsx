'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { MainNavItem, navsConfig, SidebarNavItem } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const pathname = usePathname();

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
				>
					<Icons.menu className="h-6 w-6" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="pr-0 w-[250px]">
				<MobileLink
					href="/"
					className="flex items-center"
					onOpenChange={setOpen}
				>
					<Icons.logo className="mr-2 h-6 w-6" />
					<span className="font-bold">{siteConfig.name}</span>
				</MobileLink>
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-8">
					<div className="flex flex-col space-y-3">
						{navsConfig.mainNav?.map(
							(item: MainNavItem) =>
								item.href && (
									<MobileLink
										key={item.href}
										href={item.href}
										onOpenChange={setOpen}
										className={cn(
											'transition-colors hover:underline hover:underline-offset-4',
											pathname?.startsWith(`/${item.title.toLowerCase()}`)
												? 'text-foreground font-medium'
												: 'text-foreground/60'
										)}
									>
										{item.title}
									</MobileLink>
								)
						)}
					</div>
					<div className="flex flex-col space-y-2">
						{navsConfig.sidebarNav.map(
							(item: SidebarNavItem, index: number) => (
								<div key={index} className="flex flex-col space-y-3 pt-6">
									<h4 className="font-medium">{item.title}</h4>
									{item?.items?.length &&
										item.items.map((item) => (
											<React.Fragment key={item.href}>
												{!item.disabled &&
													(item.href ? (
														<MobileLink
															href={item.href}
															onOpenChange={setOpen}
															className={cn(
																'transition-colors hover:underline hover:underline-offset-4',
																pathname?.includes(
																	`/${item.title.toLowerCase()}`
																)
																	? 'text-foreground font-medium'
																	: 'text-foreground/60'
															)}
														>
															{item.title}
															{item.label && (
																<span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
																	{item.label}
																</span>
															)}
														</MobileLink>
													) : (
														item.title
													))}
											</React.Fragment>
										))}
								</div>
							)
						)}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</Link>
	);
}
