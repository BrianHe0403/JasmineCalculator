/*
 * @Author: brianhe brian@BrianHe.com
 * @Date: 2020-04-21 14:27:30
 * @LastEditors: brianhe brian@BrianHe.com
 * @LastEditTime: 2022-09-13 09:05:20
 * @FilePath: \brian\calculator\calculator-test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
  const value = {
    amount: 30000,
    years: 10,
    rate: 6
  };
  expect(calculateMonthlyPayment(value)).toEqual('333.06');


});



it("should return a result with 2 decimal places", function () {
  // ..
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});
it("should handle terribly high interest rates", function () {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

/// etc
