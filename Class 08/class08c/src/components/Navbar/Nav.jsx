import Link from 'next/link'

const NavLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Contact", href: "/contact"},
]

const Nav = () => {
  return (
    <div >
         {/* <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link> */}

        {
            NavLinks.map( (link) => {
                return <Link href={link.href} key={link.name}>{link.name}</Link>
            })
        }
    </div>
  )
}

export default Nav