defmodule Api.MenuTest do
  use Api.DataCase

  alias Api.Menu

  describe "products" do
    alias Api.Menu.Product

    import Api.MenuFixtures

    @invalid_attrs %{description: nil, name: nil, price: nil}

    test "list_products/0 returns all products" do
      product = product_fixture()
      assert Menu.list_products() == [product]
    end

    test "get_product!/1 returns the product with given id" do
      product = product_fixture()
      assert Menu.get_product!(product.id) == product
    end

    test "create_product/1 with valid data creates a product" do
      valid_attrs = %{description: "some description", name: "some name", price: 42}

      assert {:ok, %Product{} = product} = Menu.create_product(valid_attrs)
      assert product.description == "some description"
      assert product.name == "some name"
      assert product.price == 42
    end

    test "create_product/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Menu.create_product(@invalid_attrs)
    end

    test "update_product/2 with valid data updates the product" do
      product = product_fixture()
      update_attrs = %{description: "some updated description", name: "some updated name", price: 43}

      assert {:ok, %Product{} = product} = Menu.update_product(product, update_attrs)
      assert product.description == "some updated description"
      assert product.name == "some updated name"
      assert product.price == 43
    end

    test "update_product/2 with invalid data returns error changeset" do
      product = product_fixture()
      assert {:error, %Ecto.Changeset{}} = Menu.update_product(product, @invalid_attrs)
      assert product == Menu.get_product!(product.id)
    end

    test "delete_product/1 deletes the product" do
      product = product_fixture()
      assert {:ok, %Product{}} = Menu.delete_product(product)
      assert_raise Ecto.NoResultsError, fn -> Menu.get_product!(product.id) end
    end

    test "change_product/1 returns a product changeset" do
      product = product_fixture()
      assert %Ecto.Changeset{} = Menu.change_product(product)
    end
  end
end
