import { ListItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import { restaurants } from "../utils/data";
import { useParams } from "react-router-dom";

function RestaurantsPage() {
  const { id } = useParams();

  return (
    <div>
      <div className="w-full">
        <div className="pt-12 ds:pt-8">
          {restaurants
            .filter((restaurant) => restaurant.id == id)
            .map((restaurant) => {
              const {
                id,
                title,
                alt,
                image,
                reviewPercentage,
                numberOfReviews,
                typeOfFood,
                expensiveRate,
                menu,
              } = restaurant;
              return (
                <div className="w-full ds:mr-8 pb-4 ds:pt-0">
                  <div>
                    <img
                      src={image}
                      alt={alt}
                      className="object-cover w-full h-16 ds:h-36"
                    />
                  </div>
                  <div className="pr-12 pl-12 ds:pr-48 ds:pl-48">
                    <div className="pt-4">
                      <p className="text-yellow text-l ds:text-4xl">{title}</p>
                    </div>
                    <div class=" flex flex-row mt-2 items-center">
                      <p className="text-xs text-yellow font-bold pl-1 pt-1/2 font-sans">
                        {reviewPercentage}%
                      </p>
                      <p className="text-xs text-gray pl-1 pt-1/2 font-sans">
                        ({numberOfReviews}) · {typeOfFood} · {expensiveRate}
                      </p>
                    </div>
                    <div class="grid grid-cols-1 ds:grid-cols-3 gap-2 pt-8">
                      {restaurant.menu.map((item, i) => (
                        <div key={i}>
                          <img
                            src={item.image}
                            alt="menu item"
                            className="object-cover w-64 h-48 transform hover:scale-105"
                          />
                          <h3 class="font-bold font-sans text-sm">
                            {item.id}. {item.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantsPage;
