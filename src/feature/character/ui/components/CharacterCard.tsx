import { Character } from "../../domain/Character";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Skull, HelpCircle } from "lucide-react"

export const CharacterCard = ({ character }: { character: Character }) => {
  const stateIcon = {
    Alive: <Heart className="w-4 h-4 text-green-500" />,
    Dead: <Skull className="w-4 h-4 text-red-500" />,
    unknown: <HelpCircle className="w-4 h-4 text-gray-500" />,
  }

  return (
    <Card className="w-64 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <img
          src={character.imgUrl}
          alt={`${character.name}'s image`}
          className="w-full h-64 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold truncate">{character.name}</h2>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="secondary" className="text-sm">
            {character.species}
          </Badge>
          <div className="flex items-center gap-1">
            {stateIcon[character.state]}
            <span className="text-sm text-muted-foreground">{character.state}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted p-4">
        <p className="text-sm text-muted-foreground">Click to view more details about {character.name}</p>
      </CardFooter>
    </Card>
  )
};
