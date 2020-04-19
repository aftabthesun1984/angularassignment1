var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "BirthYear", {
        get: function () {
            return this.birthYear;
        },
        set: function (value) {
            this.birthYear = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var AdhocEmployee = /** @class */ (function (_super) {
    __extends(AdhocEmployee, _super);
    function AdhocEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AdhocEmployee.prototype, "WorkHour", {
        get: function () {
            return this.workHour;
        },
        set: function (value) {
            this.workHour = value;
        },
        enumerable: true,
        configurable: true
    });
    return AdhocEmployee;
}(Employee));
var adhocEmployee = new AdhocEmployee();
adhocEmployee.Name = "Sam";
adhocEmployee.Color = "White";
adhocEmployee.BirthYear = "1990";
adhocEmployee.WorkHour = 10;
console.log("Name :" + adhocEmployee.Name + '\n' + "Color :" + adhocEmployee.Color + '\n' + "BirthYear :" + adhocEmployee.BirthYear + '\n' + "WorkHour :" + adhocEmployee.WorkHour);
