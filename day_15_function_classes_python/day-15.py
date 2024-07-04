"""
Ahmad Adil Karim
Tuesday, June, 25
"""
#creat a function that takes two numbers and return the sum of the sum
def addition(x,y):
    return x+y
#calling function addtion()
result = addition(2,5)
print(result)
print(addition(8,-10))

#define a function to calculate the area of rectangle using the length and width
def arearectangle(length, width):
    area = length*width
    return area

#calling function arearectangle
print(f"The area of a rectangle is {arearectangle(3,5)}")

#define a function to check if a number is positive, negative or zero
def ispositive(num):
    try:
        if num>0:
            return "positive"
        elif num<0:
            return "negative"
        elif num== 0:
             return "zero"
        else:
             return "undefined"
    except:
        return "undefined"
    
    
#calling function ispositive
n = "20"
print(f"The number is {ispositive(n)}")

#define a funciton and return
def iseven(num):
    try:
        if num%2==0:
            return True
        else:
            return False
    except:
        return "Error"
    
x = "22"
print(f"Is the number even? {iseven(x)}")


print("/n===========CLASSES ==========")
class Myclass:
    i = 13245  #attribut (variable)

    #method (function)
    def testing(self):
        return "World World!"
    
#calling class Myclass
#step 1) creat the instance class prooperty
newclass = Myclass()

#step 2 ) call the instance
instanceproperty = newclass.i

# step 3) call the instanse class method
instancemethod = newclass.testing()

#print result
print(f"Instance class property {instanceproperty }")
print(f"Instance class method {instancemethod}")

print("/n========CAR CLASS EXAMPLE =======")
class car:
    # instantiation object
    def __init__(self, make, model, year) :
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

#method to return the information of the car
def get_descriptive_car(self):
    return (f"{self.year}, {self.make} {self.model}")

#creat an instanse of the class car
newcar = Car("Audi", "a4", 2020)

# access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)
        



