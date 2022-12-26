export const codes = [
    {
        language: "C",
        text: `
        #include <stdio.h>

int main() {

  double num1, num2, num3;

  printf("Enter first number: ");
  scanf("%lf", &num1);
  printf("Enter second number: ");
  scanf("%lf", &num2);
  printf("Enter third number: ");
  scanf("%lf", &num3);

  // if num1 is greater than num2 & num3, num1 is the largest
  if (num1 >= num2 && num1 >= num3)
    printf("%lf is the largest number.", num1);

  // if num2 is greater than num1 & num3, num2 is the largest
  if (num2 >= num1 && num2 >= num3)
    printf("%lf is the largest number.", num2);

  // if num3 is greater than num1 & num2, num3 is the largest
  if (num3 >= num1 && num3 >= num2)
    printf("%lf is the largest number.", num3);

  return 0;
}`
    },
    {
        language: "java",
        text: `// Java program to construct the complex number

class ComplexNumber {

    // variables to hold real and imaginary part of complex
    // number
    int real, image;

    // Constructor which will be used while creating complex
    // number
    public ComplexNumber(int r, int i)
    {
        this.real = r;
        this.image = i;
    }

    // function to print real number
    public void showC()
    {
        System.out.println(this.real + " +i " + this.image);
    }

    // we will implement this function for addition
    public complex add(ComplexNumber, ComplexNumber);
}`
    },
    {
        language: "javascript",
        text: `
        const num1 = 5;
    const num2 = 3;
    
    // add two numbers
    const sum = num1 + num2;
    
    // display the sum
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
        `
    },
    {
        language: "jsx",
        text: `
        import React, { useState } from "react";
        import ReactDOM from "react-dom/client";
        
        function FavoriteColor() {
          const [color, setColor] = useState("red");
        
          return (
            <>
              <h1>My favorite color is {color}!</h1>
              <button
                type="button"
                onClick={() => setColor("blue")}
              >Blue</button>
              <button
                type="button"
                onClick={() => setColor("red")}
              >Red</button>
              <button
                type="button"
                onClick={() => setColor("pink")}
              >Pink</button>
              <button
                type="button"
                onClick={() => setColor("green")}
              >Green</button>
            </>
          );
        }
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<FavoriteColor />);
        `
    }
]