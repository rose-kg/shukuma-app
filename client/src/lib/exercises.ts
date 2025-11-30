// Cardio
// Cardio
import burpeesImg from "../assets/Shukuma/cardio/burpees.png";
import burpees2Img from "../assets/Shukuma/cardio/burpees2.png";
import burpees3Img from "../assets/Shukuma/cardio/burpees3.png";
import burpees4Img from "../assets/Shukuma/cardio/burpees4.png";
import burpees5Img from "../assets/Shukuma/cardio/burpees5.png";
import jumpingJacksImg from "../assets/Shukuma/cardio/jumping-jacks.png";
import jumpingJacks2Img from "../assets/Shukuma/cardio/jumping-jacks2.png";
import jumpingJacks3Img from "../assets/Shukuma/cardio/jumping-jacks3.png";
import jumpingJacks4Img from "../assets/Shukuma/cardio/jumping-jacks4.png";
import reverseBurpeeImg from "../assets/Shukuma/cardio/reverse-burpee.png";
import reverseBurpee2Img from "../assets/Shukuma/cardio/reverse-burpee2.png";
import tuckJumpsImg from "../assets/Shukuma/cardio/tuck-jumps.png";
import tuckJumps2Img from "../assets/Shukuma/cardio/tuck-jumps2.png";
// Lower Body
import crabToeTouchersImg from "../assets/Shukuma/lower-body/crab-toe-touchers.png";
import crabToeTouchers2Img from "../assets/Shukuma/lower-body/crab-toe-touchers2.png";
import crabToeTouchers3Img from "../assets/Shukuma/lower-body/crab-toe-touchers3.png";
import crabToeTouchers4Img from "../assets/Shukuma/lower-body/crab-toe-touchers4.png";
import curtsyLungeImg from "../assets/Shukuma/lower-body/curtsy-lunge.png";
import curtsyLunge2Img from "../assets/Shukuma/lower-body/curtsy-lunge2.png";
import jumpingSplitLungeImg from "../assets/Shukuma/lower-body/jumping-split-lunge.png";
import jumpingSplitLunge2Img from "../assets/Shukuma/lower-body/jumping-split-lunge2.png";
import plantToPushUpImg from "../assets/Shukuma/lower-body/plant-to-push-up.png";
import plantToPushUp2Img from "../assets/Shukuma/lower-body/plant-to-push-up2.png";
import prisonSquatImg from "../assets/Shukuma/lower-body/prison-squat.png";
import prisonSquat2Img from "../assets/Shukuma/lower-body/prison-squat2.png";
import prisonSquat3Img from "../assets/Shukuma/lower-body/prison-squat3.png";
import prisonSquat4Img from "../assets/Shukuma/lower-body/prison-squat4.png";
import sitUpsImg from "../assets/Shukuma/lower-body/sit-ups.png";
import sitUps2Img from "../assets/Shukuma/lower-body/sit-ups2.png";
import sitUps3Img from "../assets/Shukuma/lower-body/sit-ups3.png";
import sitUps4Img from "../assets/Shukuma/lower-body/sit-ups4.png";
import sitUps5Img from "../assets/Shukuma/lower-body/sit-ups5.png";
import squatImg from "../assets/Shukuma/lower-body/squat.png";
import squat2Img from "../assets/Shukuma/lower-body/squat2.png";
import squat3Img from "../assets/Shukuma/lower-body/squat3.png";
import squat4Img from "../assets/Shukuma/lower-body/squat4.png";
import squat5Img from "../assets/Shukuma/lower-body/squat5.png";
import vUpsImg from "../assets/Shukuma/lower-body/v-ups.png";
import vUps2Img from "../assets/Shukuma/lower-body/v-ups2.png";
// Upper Body
import declinePushUpImg from "../assets/Shukuma/upper-body/decline-push-up.png";
import declinePushUp2Img from "../assets/Shukuma/upper-body/decline-push-up2.png";
import pikePushUpImg from "../assets/Shukuma/upper-body/pike-push-up.png";
import pikePushUp2Img from "../assets/Shukuma/upper-body/pike-push-up2.png";
import pikePushUp3Img from "../assets/Shukuma/upper-body/pike-push-up3.png";
import pikePushUp4Img from "../assets/Shukuma/upper-body/pike-push-up4.png";
import pushUpImg from "../assets/Shukuma/upper-body/push-up.png";
import pushUp2Img from "../assets/Shukuma/upper-body/push-up2.png";
import pushUp3Img from "../assets/Shukuma/upper-body/push-up3.png";
import pushUp4Img from "../assets/Shukuma/upper-body/push-up4.png";
import pushUp5Img from "../assets/Shukuma/upper-body/push-up5.png";
import pushUpToeTouchImg from "../assets/Shukuma/upper-body/push-up-to-toe-touch.png";
import pushUpToeTouch2Img from "../assets/Shukuma/upper-body/push-up-to-toe-touch2.png";

export type Suit = "hearts" | "diamonds" | "clubs" | "spades";
export type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
export type Category = "cardio" | "strength" | "flexibility" | "core";
export type Level = "beginner" | "intermediate" | "advanced";

export interface Exercise {
  id: string;
  name: string;
  suit: Suit;
  rank: Rank;
  reps: number | string; // e.g. "10" or "30s"
  image: string;
  instructions: string[];
  category: Category;
  level: Level;
}

export const EXERCISES: Exercise[] = [
  // Cardio
  { id: "cardio-1", name: "", instructions: [], suit: "spades", rank: "2", reps: 10, image: burpeesImg, category: "cardio", level: "intermediate" },
  { id: "cardio-2", name: "", instructions: [], suit: "spades", rank: "3", reps: 10, image: burpees2Img, category: "cardio", level: "intermediate" },
  { id: "cardio-3", name: "", instructions: [], suit: "spades", rank: "4", reps: 10, image: burpees3Img, category: "cardio", level: "intermediate" },
  { id: "cardio-4", name: "", instructions: [], suit: "spades", rank: "5", reps: 10, image: burpees4Img, category: "cardio", level: "intermediate" },
  { id: "cardio-5", name: "", instructions: [], suit: "spades", rank: "6", reps: 10, image: burpees5Img, category: "cardio", level: "intermediate" },
  { id: "cardio-6", name: "", instructions: [], suit: "hearts", rank: "7", reps: 20, image: jumpingJacksImg, category: "cardio", level: "beginner" },
  { id: "cardio-7", name: "", instructions: [], suit: "hearts", rank: "8", reps: 20, image: jumpingJacks2Img, category: "cardio", level: "beginner" },
  { id: "cardio-8", name: "", instructions: [], suit: "hearts", rank: "9", reps: 20, image: jumpingJacks3Img, category: "cardio", level: "beginner" },
  { id: "cardio-9", name: "", instructions: [], suit: "hearts", rank: "10", reps: 20, image: jumpingJacks4Img, category: "cardio", level: "beginner" },
  { id: "cardio-10", name: "", instructions: [], suit: "clubs", rank: "J", reps: 8, image: reverseBurpeeImg, category: "cardio", level: "advanced" },
  { id: "cardio-11", name: "", instructions: [], suit: "clubs", rank: "Q", reps: 8, image: reverseBurpee2Img, category: "cardio", level: "advanced" },
  { id: "cardio-12", name: "", instructions: [], suit: "diamonds", rank: "K", reps: 12, image: tuckJumpsImg, category: "cardio", level: "intermediate" },
  { id: "cardio-13", name: "", instructions: [], suit: "diamonds", rank: "A", reps: 12, image: tuckJumps2Img, category: "cardio", level: "intermediate" },
  // Lower Body
  { id: "lower-1", name: "", instructions: [], suit: "clubs", rank: "2", reps: 15, image: crabToeTouchersImg, category: "strength", level: "intermediate" },
  { id: "lower-2", name: "", instructions: [], suit: "clubs", rank: "3", reps: 15, image: crabToeTouchers2Img, category: "strength", level: "intermediate" },
  { id: "lower-3", name: "", instructions: [], suit: "clubs", rank: "4", reps: 15, image: crabToeTouchers3Img, category: "strength", level: "intermediate" },
  { id: "lower-4", name: "", instructions: [], suit: "clubs", rank: "5", reps: 15, image: crabToeTouchers4Img, category: "strength", level: "intermediate" },
  { id: "lower-5", name: "", instructions: [], suit: "spades", rank: "6", reps: 10, image: curtsyLungeImg, category: "strength", level: "intermediate" },
  { id: "lower-6", name: "", instructions: [], suit: "spades", rank: "7", reps: 10, image: curtsyLunge2Img, category: "strength", level: "intermediate" },
  { id: "lower-7", name: "", instructions: [], suit: "hearts", rank: "8", reps: 10, image: jumpingSplitLungeImg, category: "strength", level: "advanced" },
  { id: "lower-8", name: "", instructions: [], suit: "hearts", rank: "9", reps: 10, image: jumpingSplitLunge2Img, category: "strength", level: "advanced" },
  { id: "lower-9", name: "", instructions: [], suit: "diamonds", rank: "10", reps: 10, image: plantToPushUpImg, category: "strength", level: "intermediate" },
  { id: "lower-10", name: "", instructions: [], suit: "diamonds", rank: "J", reps: 10, image: plantToPushUp2Img, category: "strength", level: "intermediate" },
  { id: "lower-11", name: "", instructions: [], suit: "clubs", rank: "Q", reps: 15, image: prisonSquatImg, category: "strength", level: "beginner" },
  { id: "lower-12", name: "", instructions: [], suit: "clubs", rank: "K", reps: 15, image: prisonSquat2Img, category: "strength", level: "beginner" },
  { id: "lower-13", name: "", instructions: [], suit: "clubs", rank: "A", reps: 15, image: prisonSquat3Img, category: "strength", level: "beginner" },
  { id: "lower-14", name: "", instructions: [], suit: "clubs", rank: "2", reps: 15, image: prisonSquat4Img, category: "strength", level: "beginner" },
  { id: "lower-15", name: "", instructions: [], suit: "diamonds", rank: "3", reps: 15, image: sitUpsImg, category: "core", level: "beginner" },
  { id: "lower-16", name: "", instructions: [], suit: "diamonds", rank: "4", reps: 15, image: sitUps2Img, category: "core", level: "beginner" },
  { id: "lower-17", name: "", instructions: [], suit: "diamonds", rank: "5", reps: 15, image: sitUps3Img, category: "core", level: "beginner" },
  { id: "lower-18", name: "", instructions: [], suit: "diamonds", rank: "6", reps: 15, image: sitUps4Img, category: "core", level: "beginner" },
  { id: "lower-19", name: "", instructions: [], suit: "diamonds", rank: "7", reps: 15, image: sitUps5Img, category: "core", level: "beginner" },
  { id: "lower-20", name: "", instructions: [], suit: "hearts", rank: "8", reps: 15, image: squatImg, category: "strength", level: "beginner" },
  { id: "lower-21", name: "", instructions: [], suit: "hearts", rank: "9", reps: 15, image: squat2Img, category: "strength", level: "beginner" },
  { id: "lower-22", name: "", instructions: [], suit: "hearts", rank: "10", reps: 15, image: squat3Img, category: "strength", level: "beginner" },
  { id: "lower-23", name: "", instructions: [], suit: "hearts", rank: "J", reps: 15, image: squat4Img, category: "strength", level: "beginner" },
  { id: "lower-24", name: "", instructions: [], suit: "hearts", rank: "Q", reps: 15, image: squat5Img, category: "strength", level: "beginner" },
  { id: "lower-25", name: "", instructions: [], suit: "diamonds", rank: "K", reps: 12, image: vUpsImg, category: "core", level: "intermediate" },
  { id: "lower-26", name: "", instructions: [], suit: "diamonds", rank: "A", reps: 12, image: vUps2Img, category: "core", level: "intermediate" },
  // Upper Body
  { id: "upper-1", name: "", instructions: [], suit: "spades", rank: "2", reps: 10, image: declinePushUpImg, category: "strength", level: "intermediate" },
  { id: "upper-2", name: "", instructions: [], suit: "spades", rank: "3", reps: 10, image: declinePushUp2Img, category: "strength", level: "intermediate" },
  { id: "upper-3", name: "", instructions: [], suit: "diamonds", rank: "4", reps: 10, image: pikePushUpImg, category: "strength", level: "advanced" },
  { id: "upper-4", name: "", instructions: [], suit: "diamonds", rank: "5", reps: 10, image: pikePushUp2Img, category: "strength", level: "advanced" },
  { id: "upper-5", name: "", instructions: [], suit: "diamonds", rank: "6", reps: 10, image: pikePushUp3Img, category: "strength", level: "advanced" },
  { id: "upper-6", name: "", instructions: [], suit: "diamonds", rank: "7", reps: 10, image: pikePushUp4Img, category: "strength", level: "advanced" },
  { id: "upper-7", name: "", instructions: [], suit: "clubs", rank: "8", reps: 12, image: pushUpImg, category: "strength", level: "beginner" },
  { id: "upper-8", name: "", instructions: [], suit: "clubs", rank: "9", reps: 12, image: pushUp2Img, category: "strength", level: "beginner" },
  { id: "upper-9", name: "", instructions: [], suit: "clubs", rank: "10", reps: 12, image: pushUp3Img, category: "strength", level: "beginner" },
  { id: "upper-10", name: "", instructions: [], suit: "clubs", rank: "J", reps: 12, image: pushUp4Img, category: "strength", level: "beginner" },
  { id: "upper-11", name: "", instructions: [], suit: "clubs", rank: "Q", reps: 12, image: pushUp5Img, category: "strength", level: "beginner" },
  { id: "upper-12", name: "", instructions: [], suit: "hearts", rank: "K", reps: 10, image: pushUpToeTouchImg, category: "strength", level: "advanced" },
  { id: "upper-13", name: "", instructions: [], suit: "hearts", rank: "A", reps: 10, image: pushUpToeTouch2Img, category: "strength", level: "advanced" }
];

export function shuffleDeck(deck: Exercise[]): Exercise[] {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
}

export function filterDeck(deck: Exercise[], filters: { category?: Category[], level?: Level[] }): Exercise[] {
  return deck.filter(ex => {
    const catMatch = !filters.category || filters.category.length === 0 || filters.category.includes(ex.category);
    const levelMatch = !filters.level || filters.level.length === 0 || filters.level.includes(ex.level);
    return catMatch && levelMatch;
  });
}
