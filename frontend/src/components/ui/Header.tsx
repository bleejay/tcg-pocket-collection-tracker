import { Login } from '@/components/Login.tsx'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.tsx'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { logout } from '@/lib/Auth.ts'
import { UserContext } from '@/lib/context/UserContext'
import { use } from 'react'
import { Link } from 'react-router'

export function Header() {
  const { user, setUser, isLoginDialogOpen, setIsLoginDialogOpen } = use(UserContext)
  return (
    <>
      <header className="flex h-20 w-full shrink-0 flex-wrap items-center justify-between px-4 md:px-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link to="/">
                <Button variant="ghost">Overview</Button>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/collection">
                <Button variant="ghost">Collection</Button>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link to="/trade">
                <Button variant="ghost">Trade</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Link to="/community">
            <Button variant="ghost">Community</Button>
          </Link>

          {user ? (
            <Button
              variant="outline"
              onClick={async () => {
                await logout()
                setUser(null)
              }}
            >
              Logout
            </Button>
          ) : (
            <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
              <DialogTrigger asChild>
                <Button>Login</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login / Sign up</DialogTitle>
                </DialogHeader>
                <Login />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </header>
    </>
  )
}
