# secret_word = "giraffe"
# guess = ""
# guess_count = 0
# guess_limit = 3
# out_of_guesses = false

# while guess != secret_word && !out_of_guesses
#     if guess_count < guess_limit
#         puts "Enter guess:"
#         guess = gets.chomp()
#         guess_count += 1
#     else
#         out_of_guesses = true
#     end
# end

# if out_of_guesses
#     puts "Yoe Lose!"
# else
#     puts "You Won!" 
# end

number = 10
puts "Enter number"
i = gets.chomp.to_i

while i <= number
 puts i
 i += 2
end


# Samples


  
# def add_three(number)
#     number + 3
#   end
  
#   returned_value = add_three(4)
#   puts returned_value


# def add_three(n)
#     new_value = n + 3
#     puts new_value
#     new_value
#   end

#   add_three(7)

# def first
#     puts "first method"
#   end
  
#   def second
#     first
#     puts "second method"
#   end
  
#   second
#   puts "main method"

# x = 2
# if ((x * 3) / 2) == (4 + 4 - x - 3)
#   puts "Did you get it right?"
# else
#   puts "Did you?"
# end

# y = 9
# x = 10
# if (x + 1) <= (y)
#   puts "Alright."
# elsif (x + 1) >= (y)
#   puts "Alright now!"
# elsif (y + 1) == x
#   puts "ALRIGHT NOW!"
# else
#   puts "Alrighty!"
# end

# def equal_to_four(x)
#   if x == 4
#     puts "yup"
#   else
#     puts "nope"
# end

# end
# equal_to_four(5)



# i = 0
# loop do
#   i += 2
#   puts i
#   if i == 10
#     break       # this will cause execution to exit the loop
#   end
# end


# i = 0
# loop do
#   i += 2
#   if i == 4
#     next        # skip rest of the code in this iteration
#   end
#   puts i
#   if i == 20
#     break
#   end
# end

# x = gets.chomp.to_i

# while x >= 0
#   puts x
#   x -= 1
# end

# puts "Done!"

# loop do
#   puts "Do you want to do that again?"
#   answer = gets.chomp
#   if answer != 'Y'
#     break
#   end
# end

# x = gets.chomp.to_i

# for i in 1..x do
#   if i % 2 == 1
#   puts i
#   end
# end

# puts "Done!"

# x = 1..20

# for i in x do
#   if i % 2 == 0
#   puts i
#   end
# end

# puts "Done!"

# x = 0

# while x <= 10
#   if x.odd?
#     puts x
#   end
#   x += 1
# end


# x = 0

# while x <= 10
#   if x == 3
#     x += 1
#     next
#   elsif x.odd?
#     puts x
#   end
#   x += 1
# end

# names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']
# names.each { |name| puts name }


# names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']
# x = 1

# names.each do |name|
#   puts "#{x}. #{name}"
#   x += 1
# end

# def fibonacci(number)
#   if number < 2
#     number
#   else
#     fibonacci(number - 1) + fibonacci(number - 2)
#   end
# end

# puts fibonacci(8)

# sample = gets.chomp

# while sample !="Stop" do
#   puts "Want to stop"
#   ans = gets.chomp
#   if ans =="Stop"
#     break
#   end
# end

# def count(start)
#   puts start
#   if start > 0
#     count(start - 1)
#   end
# end

# count(10)

# def count_to_zero(number)
#   if number <= 0
#     puts number
#   else
#     puts number
#     count_to_zero(number-1)
#   end
# end

# count_to_zero(10)

# Alexandre Gama

# def fibbonacci(count)
#   n1 = 0
#   n2 = 1
#   sequence = []
#   while count > 2
#     n3 = n1 + n2
#     sequence.push n3
#     n1 = n2
#     n2 = n3
#     count = count - 1
#   end
#   sequence
# end

# puts fibbonacci(9)


# def mutate(arr)
#   arr.pop
# end

# def not_mutate(arr)
#   arr.select { |i| i > 3 }
# end

# a = [1, 2, 3, 4, 5, 6]
# mutate(a)
# not_mutate(a)

# puts a

# smallest integer 

# array = [1,2,3,4,5]
# lowest = array[0]
# i = 0
# while i<array.length
#   if array[i]<lowest
#     lowest = array[i]
#   end
#   i = i+1
# end
# puts lowest

# class Question
#   attr_accessor :prompt, :answer
#   def initialize(promt,answer)
#     @promt = promt
#     @answer = answer
#   end
# end

# p1 = "What is one plus one? \n a.1 \n b.2\n c.3"
# p2 = "What color are bananas? \n a.red \n b.blue\n c.yellow"
# p3 = "What color are apples? \n a.red \n b.blue\n c.yellow"

# questions = [
#   Question.new(p1,"1"),
#   Question.new(p2,"yellow"),
#   Question.new(p3,"red")
#   ]
  
# def run_test(questions)
#   answer = ""
#   score = 0
#   for question in questions
#     puts question.promt
#     answer = gets.chomp()
#     if answer == question.answer
#       score += 1
#     end
#   end
#   puts ("You got" +score.to_s+ "/" + questions.length().to_s)
# end

# run_test(questions)

  
#-------------------------------------------

  # class Account
  #   attr_reader :balance
  #   attr_reader :name
  #   def initialize(name, balance=100)
  #     @name = name
  #     @balance = balance
  #   end
  
  #   private
  
  #   def pin
  #     @pin = 1234
  #   end
  
  #   def pin_error
  #     return "Access denied: incorrect PIN."
  #   end
  
  #   public
  
  #   def display_balance(pin_number)
  #     if pin_number == pin
  #       puts "Balance: #{@balance}"
  #     else
  #       puts pin_error
  #     end
  #   end
  
  #   def withdraw(pin_number, amount)
  #     if pin_number == @pin
  #       @balance -= amount
  #       puts "Withdrew #{amount}. New balance: #{balance}"
  #     else
  #       puts pin_error
  #     end
  #   end
  # end
  
  # checking_account = Account.new ("John", 100)
  # checking_account.display_balance(1234)

class Area
    def get(shape)
        shape.area
    end

end

class Shape
    def show_area(area)
        puts "The #{@shape} has an area of #{area}"
    end
end

class Square < Shape
    def initialize(side)
        @side = side
        @shape = "square"
    end
    def area
        @side**2
    end
end

class Rectangle < Shape
    def initialize(length, width)
        @length = length
        @width = width
        @shape = "rectangle"
    end
    def area
        @length * @width
    end
end

class Triangle < Shape
    def initialize(base, height)
        @base = base.to_f
        @height = height.to_f
        @shape = "triangle"
    end
    def area
        0.5 * @base * @height
    end
end
