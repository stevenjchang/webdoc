/**
 * _Simulation_ for a automobile that can drive on a manifold surface.
 *
 * ```js
 * const car = new Car({ make: "Ferrari" });
 *
 * car.installComponent("interior", new AirConditioner());
 * car.installComponent("exterior", new Bumper());
 * car.drop("1234 Virtual Street, OH, Virtual US", "Universe-Default");
 * car.gear("D");
 * car.accelerate(2).until(65).then(0);
 *
 * car.onCrash(() => Services.Insurance.initiateClaim("abcdefghi-ticket"));
 * ```
 */
export class Car {
  /**
   * @param {Function} callback
   * @example
   * car.onCrash((car) => console.log(car.id + " crashed!"))
   */
  onCrash(callback) {

  }
}
