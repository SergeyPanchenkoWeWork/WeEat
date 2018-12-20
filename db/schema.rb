# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_20_141653) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cuisines", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", limit: 64
    t.integer "cuisine_id"
    t.boolean "accept10bis", default: false
    t.integer "maxDeliveryTime"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["accept10bis"], name: "index_restaurants_on_accept10bis"
    t.index ["cuisine_id"], name: "index_restaurants_on_cuisine_id"
    t.index ["maxDeliveryTime"], name: "index_restaurants_on_maxDeliveryTime"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.integer "restaurant_id"
    t.integer "user_id"
    t.text "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", limit: 64
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
