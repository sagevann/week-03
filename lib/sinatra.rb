require 'rubygems'
require 'sinatra'
require 'yaml'
require 'sinatra/jsonp'
# Sinatra has some good documentation
# 
# @see http://www.sinatrarb.com/
# @see http://www.sinatrarb.com/intro.html
# 
# Give it a read and see what fun things you can put together. Don't feel like
# you need to go over everything.
# 


get '/' do
  erb :index
end

get '/jsonp' do
 data = YAML::load( File.open( './lib/public/yml/test.yml' ) )
  JSONP data
end

post "/api" do
  request.body.rewind  # in case someone already read it
  #data = JSON.parse request.body.read
  puts request.body.read
end


get '/hello/:name' do |n|
  "<h1>Hello #{n}!</h1>"
end

get '/admin' do
  %{
    <h1>Admin Page</h1>
    <h2>This is the stuff of admins</h2>
  }
end
