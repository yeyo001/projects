def caesar_cipher(string, factor)
    dictionary_of_small_letters = ('a'..'z').to_a
    dictionary_of_capital_letters = ('A'..'Z').to_a
    starting_array = string.split('')
  
    finish_array = starting_array.map do |character|
      if !(('a'..'z').to_a + ('A'..'Z').to_a).include?(character)
        character = character
  
      # iterando sobre las letras mayusculas
      elsif character.upcase == character
        index = (dictionary_of_capital_letters.index(character.to_s) + factor) % 26
        dictionary_of_capital_letters[index]
  
      # iterandosobre las letras minusculas
      elsif character.downcase == character
        index = (dictionary_of_small_letters.index(character.to_s) + factor) % 26
        dictionary_of_small_letters[index]
      end
    end
    finish_array.join('')
  end
  
  p caesar_cipher('Hola mundo', 5)