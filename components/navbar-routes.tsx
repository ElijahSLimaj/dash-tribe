"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { isTeacher } from "@/lib/teacher";

const NavbarRoutes = () => {
    const { userId } = useAuth();

    const pathName = usePathname();
    const isTeacherPage = pathName?.startsWith("/teacher");
    const isPlayerPage = pathName?.includes("/chapter");
    const isSearchPage = pathName === "/search";

    return (
        <>   {isSearchPage && (
            <div className="hidden md:block">
                <SearchInput />
            </div>
        )}
            <div className="flex gap-x-2 ml-auto">
                {
                    isTeacherPage || isPlayerPage ?
                        (
                            <Link href="/">
                                <Button size="sm" variant="ghost">
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Exit
                                </Button>
                            </Link>
                        ) : isTeacher(userId) ? (
                            <Link href="/teacher/courses">
                                <Button size="sm" variant="ghost">
                                    Teacher mode
                                </Button>
                            </Link>
                        ) : null
                }
                {/** Clerk auth sign out button */}
                <UserButton
                    afterSignOutUrl="/"
                />
            </div>
        </>
    )
}

export default NavbarRoutes;