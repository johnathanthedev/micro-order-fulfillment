FROM ruby:3.0.1
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /micro-api
COPY Gemfile /micro-api/Gemfile
COPY Gemfile.lock /micro-api/Gemfile.lock
RUN bundle install

COPY docker/scripts/entrypoint.sh /scripts/
RUN chmod +x /scripts/entrypoint.sh
ENTRYPOINT ["docker/scripts/entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
