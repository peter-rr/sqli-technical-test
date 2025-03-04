
export class PetManager {
    private pets: { id: number; name: string }[];
  
    constructor(pets: { id: number; name: string }[]) {
      this.pets = pets;
    }
  
    countPetNames(): Record<string, number> {
        const nameCounts: Record<string, number> = {};
        
        // Count occurrences of each pet name
        this.pets.forEach((pet) => {
            if (pet.name) {
                nameCounts[pet.name] = (nameCounts[pet.name] || 0) + 1
            }
        })

        // Filter out names that appear only once
        return Object.fromEntries(
            Object.entries(nameCounts).filter(([_, count]) => count > 1)
        )
    }
}
  