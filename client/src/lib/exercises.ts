import squatImg from "@assets/generated_images/illustration_of_a_person_doing_a_squat.png";
import lungeImg from "@assets/generated_images/illustration_of_a_person_doing_a_lunge.png";
import jumpingJackImg from "@assets/generated_images/illustration_of_a_person_doing_jumping_jacks.png";
import plankImg from "@assets/IMG_9942_1764247940333.png";

export type Suit = "hearts" | "diamonds" | "clubs" | "spades";
export type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

export interface Exercise {
  id: string;
  name: string;
  suit: Suit;
  rank: Rank;
  reps: number | string; // e.g. "10" or "30s"
  image: string;
  instructions: string[];
}

export const EXERCISES: Exercise[] = [
  {
    id: "1",
    name: "Plank",
    suit: "diamonds",
    rank: "K",
    reps: "30s",
    image: plankImg,
    instructions: [
      "Start in a push-up position but with your weight on your forearms.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and hold."
    ]
  },
  {
    id: "2",
    name: "Deep Squat",
    suit: "hearts",
    rank: "Q",
    reps: 15,
    image: squatImg,
    instructions: [
      "Stand with feet shoulder-width apart.",
      "Lower your hips as if sitting in a chair.",
      "Keep your chest up and back straight.",
      "Return to standing position."
    ]
  },
  {
    id: "3",
    name: "Forward Lunge",
    suit: "spades",
    rank: "J",
    reps: 10, // per leg
    image: lungeImg,
    instructions: [
      "Step forward with one leg.",
      "Lower your hips until both knees are bent at 90 degrees.",
      "Push back to the starting position.",
      "Repeat with the other leg."
    ]
  },
  {
    id: "4",
    name: "Jumping Jacks",
    suit: "clubs",
    rank: "10",
    reps: 20,
    image: jumpingJackImg,
    instructions: [
      "Start with feet together and arms at your sides.",
      "Jump up, spreading your feet and bringing arms overhead.",
      "Jump again to return to the starting position."
    ]
  },
  // Duplicates to fill the deck for demo purposes
  {
    id: "5",
    name: "Plank",
    suit: "hearts",
    rank: "5",
    reps: "45s",
    image: plankImg,
    instructions: ["Challenge yourself to hold longer!"]
  },
  {
    id: "6",
    name: "Deep Squat",
    suit: "clubs",
    rank: "8",
    reps: 20,
    image: squatImg,
    instructions: ["Go lower this time!"]
  },
  {
    id: "7",
    name: "Forward Lunge",
    suit: "diamonds",
    rank: "4",
    reps: 12,
    image: lungeImg,
    instructions: ["Keep your core tight."]
  },
  {
    id: "8",
    name: "Jumping Jacks",
    suit: "spades",
    rank: "A",
    reps: 50,
    image: jumpingJackImg,
    instructions: ["Go as fast as you can!"]
  }
];

export function shuffleDeck(deck: Exercise[]): Exercise[] {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
}
