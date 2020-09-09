function identity<T>(arg: T): T {
  return arg;
}

const number = identity<number>(5);
console.log("number",typeof  number);
const string = identity<string>("5");
console.log("string", typeof string);
const string1 = identity("5");
console.log("string1", typeof string1);

interface BaseDto<T> {
  success: boolean,
  data?: T,
  message?: string
}
type CreditData = {
  company: string;
  activity: string[];
}

type UserData = {
  firstName: string;
  lastName: string;
}

class ControllerDto<T> implements BaseDto<T> {
  constructor(
    readonly success: boolean = false,
    readonly data?: T,
    readonly message?: string,
    readonly code?: number
  ) {
  }
}

const creditData: CreditData = {
  company: "test company",
  activity: ["test", "activity1", "activity2"]
};

const userData: UserData = {
  firstName: "test firstName",
  lastName: "test lastName"
};

const example1 = new ControllerDto<CreditData>(
  true,
  creditData
);
console.log("example1", example1);

const example2 = new ControllerDto<CreditData>(
  false,
  undefined, //per TS documentation, pass optional params as undefined if not used
  "Credit records not available",
  961
);

const example3 = new ControllerDto<UserData>(
  true,
  userData
);
console.log("example3", example3);

const example4 = new ControllerDto<UserData>(
  false,
  undefined, //per TS documentation, pass optional params as undefined if not used
  "User record not available",
  963
);
console.log("example4", example4);
