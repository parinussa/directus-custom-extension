FROM directus/directus:10.10

USER node

WORKDIR /directus

EXPOSE 8055

COPY ./extensions extensions