import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <html className="dark p-8 flex">
      <Card className="w-[240px] m-8">
        <CardHeader>
          <CardTitle>Room-01</CardTitle>
          <CardDescription>Room created by: ####</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Join</Button>
        </CardFooter>
      </Card>
      <Card className="w-[240px] m-8">
        <CardHeader>
          <CardTitle>Room-01</CardTitle>
          <CardDescription>Room created by: ####</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Join</Button>
        </CardFooter>
      </Card>
    </html>
  );
}