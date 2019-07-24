if guest == @guest
  json.extract! guest, :name, :age, :favorite_color, :gifts
else
  json.extract! guest, :name, :age, :favorite_color
end