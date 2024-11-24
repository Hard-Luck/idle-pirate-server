export class Generators {
  private counters: { [key: string]: number } = {};
  private prefixes = {
    user: "test-user-",
    item: "test-item-",
    quest: "test-quest-",
    questReward: "test-quest-reward-",
    questRequirement: "test-quest-requirement-",
    questRewardItem: "test-quest-reward-item-",
    questRequirementItem: "test-quest-requirement-item-",
    ship: "test-ship-",
    userShip: "test-user-ship-",
  };

  private generate(type: keyof typeof this.prefixes) {
    if (!(type in this.counters)) {
      this.counters[type] = 1;
    }
    return this.prefixes[type] + this.counters[type]++;
  }

  private reset(type: keyof typeof this.prefixes) {
    this.counters[type] = 1;
  }

  // Generator methods
  generateUserId = () => this.generate("user");
  generateItemId = () => this.generate("item");
  generateQuestId = () => this.generate("quest");
  generateQuestRewardId = () => this.generate("questReward");
  generateQuestRequirementId = () => this.generate("questRequirement");
  generateQuestRewardItemId = () => this.generate("questRewardItem");
  generateQuestRequirementItemId = () => this.generate("questRequirementItem");
  generateShipId = () => this.generate("ship");
  generateUserShipId = () => this.generate("userShip");

  resetAllCounters() {
    Object.keys(this.prefixes).forEach((key) => {
      this.reset(key as keyof typeof this.prefixes);
    });
  }
}

// Export a singleton instance
export default Generators;
