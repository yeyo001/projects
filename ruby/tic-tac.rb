module Validate
def number?(obj)
  obj = obj.to_s unless obj.is_a? String
  x = /\A[+-]?\d+(\.\d+)?\z/.match(obj)
  # sets input numbers outside 1-9 to nil to reject
  x = nil if obj.to_i < 1 || obj.to_i > 9
  return obj.to_i unless x.nil?

  x
end
end

class Player 
include Validate
attr_reader :name, :symbol

def initialize (name, symbol)
  @name = name
  @symbol = symbol
end

def turn
  puts "#{name}, which space do you want?"
  turn = gets.chomp
  x = number?(turn)
  while x.nil?
    puts "Invalid entry, try again"
    x = self.turn
  end

  x
end
end

class Board
# if any one of these variables is true the relevant space ((0-8) + 1) is occupied
def initialize
  @occupied = []
  (0..8).each do |_i|
    @occupied.push(false)
    @first_row = '   |   |   '
    @second_row = +' 1 | 2 | 3 '
    @third_row = '___|___|___'
    @fourth_row = '   |   |   '
    @fifth_row = +' 4 | 5 | 6 '
    @sixth_row = '___|___|___'
    @seventh_row = '   |   |   '
    @eighth_row = +' 7 | 8 | 9 '
    @nineth_row = '   |   |   '
  end
end

def stalemate
  unless @occupied.include?(false)
    puts "Looks like a stalemate. Play again."
    exit!
  end
end


def change(num, symb)
  # converts user input to array counting style
  num = (num - 1)
  if @occupied[num] == false
    @occupied[num] = true
    alter_board(num, symb)
  else
    puts "That selection (#{num + 1}) is not available. Select another number."
    false
  end
end

def alter_board(num, symb)
  case num
  when 0
    @second_row[1] = symb
  when 1
    @second_row[5] = symb
  when 2
    @second_row[9] = symb
  when 3
    @fifth_row[1] = symb
  when 4
    @fifth_row[5] = symb
  when 5
    @fifth_row[9] = symb
  when 6
    @eighth_row[1] = symb
  when 7
    @eighth_row[5] = symb
  when 8
    @eighth_row[9] = symb

  end
end

def display
  puts @first_row
  puts @second_row
  puts @third_row
  puts @fourth_row
  puts @fifth_row
  puts @sixth_row
  puts @seventh_row
  puts @eighth_row
  puts @nineth_row

end

# checks all 8 possible win variations for indentical characters
def check_winner(symbol, name)
  counter = 0
  win_variation_one = []
  win_variation_one.push(@second_row[1], @second_row[5], @second_row[9])
  win_variation_one.each do |x|
    counter += 1 if x == symbol
  end
  winner(counter, name)

  counter = 0
  win_variation_two = []
  win_variation_two.push(@fifth_row[1], @fifth_row[5], @fifth_row[9])
  win_variation_two.each do |x|
    counter += 1 if x == symbol
  end
  winner(counter, name)

  counter = 0
  win_variation_three = []
  win_variation_three.push(@eighth_row[1], @eighth_row[5], @eighth_row[9])
  win_variation_three.each do |x|
    counter += 1 if x == symbol
  end 
  winner(counter, name)

  counter = 0
  win_variation_four = []
  win_variation_four.push(@second_row[1],@fifth_row[1], @eighth_row[1])
  win_variation_four.each do |x|
    counter += 1 if x == symbol
  end
  winner(counter, name)

  counter = 0
  win_variation_five = []
  win_variation_five.push(@second_row[5],@fifth_row[5], @eighth_row[5])
  win_variation_five.each do |x|
    counter += 1 if x == symbol
  end
  winner(counter, name)

  counter = 0
  win_variation_six = []
  win_variation_six.push(@second_row[9],@fifth_row[9], @eighth_row[9])
  win_variation_six.each do |x|
    counter += 1 if x == symbol
  end 
  winner(counter, name)

  counter = 0
  win_variation_seven = []
  win_variation_seven.push(@second_row[1],@fifth_row[5], @eighth_row[9])
  win_variation_seven.each do |x|
    counter += 1 if x == symbol
  end 
  winner(counter, name)

  counter = 0
  win_variation_eight = []
  win_variation_eight.push(@second_row[9],@fifth_row[5], @eighth_row[1])
  win_variation_eight.each do |x|
    counter += 1 if x == symbol
  end 
  winner(counter, name)

  false
end

def winner(counter, name)
  name = name.upcase
  if counter == 3 then
    puts "CONGRATULATIONS #{name}. A WINNER IS YOU!"
    display
    exit!
  end
end
end

puts 'Ready Player One: Please enter your name'
name_one = gets.chomp
player_one = Player.new(name_one, 'X')
puts 'Ready Player Two: Please enter your name'
name_two = gets.chomp
player_two = Player.new(name_two, 'O')

board = Board.new

victory = false
counter = 0

while victory == false
counter += 1
checker = false
if counter.odd?
  while checker == false
    board.stalemate
    board.display
    turn = player_one.turn
    symb = player_one.symbol
    checker = board.change(turn, symb)
  end
  victory = board.check_winner('X', name_one)
else
  while checker == false
    board.stalemate
    board.display
    turn = player_two.turn
    symb = player_two.symbol
    checker = board.change(turn, symb)
  end
  victory = board.check_winner('O', name_two)
end
end