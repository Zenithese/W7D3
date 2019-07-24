if party == @party
  json.extract! party, :name, :location
  
  json.guests party.guests.each do |guest|
    json.name guest.name
    json.gifts guest.gifts, :title
  end

else
  json.extract! party, :name, :location
end
