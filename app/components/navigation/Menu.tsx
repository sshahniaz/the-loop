"use client";
import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";

interface Props {
  categories: string[];
  subcategories: string[];
}

const Menu = ({ categories, subcategories }: Props) => {
  return (
    <nav>
      <ul>
        <li>
          <MenuItem label={categories} href={`/${categories}`} />
          <ul>
            <li>
              <MenuItem
                label={subcategories}
                href={`/${categories}/${subcategories}`}
              />
            </li>
          </ul>
        </li>
      </ul>

      {/* <ul>
              {subcategories.map((subcategory, index) => (
                <li key={index}>
                  <MenuItem
                    label={category}
                    href={`/${category}/${subcategory}`}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Menu;
