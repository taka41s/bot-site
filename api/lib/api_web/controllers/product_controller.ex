defmodule ApiWeb.ProductController do
  use ApiWeb, :controller

  alias Api.Menu
  alias Api.Menu.Product

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    products = Menu.list_products()
    render(conn, :index, products: products)
  end

  def create(conn, %{"product" => product_params}) do
    with {:ok, %Product{} = product} <- Menu.create_product(product_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", ~p"/api/products/#{product}")
      |> render(:show, product: product)
    end
  end

  def show(conn, %{"id" => id}) do
    product = Menu.get_product!(id)
    render(conn, :show, product: product)
  end

  def update(conn, %{"id" => id, "product" => product_params}) do
    product = Menu.get_product!(id)

    with {:ok, %Product{} = product} <- Menu.update_product(product, product_params) do
      render(conn, :show, product: product)
    end
  end

  def delete(conn, %{"id" => id}) do
    product = Menu.get_product!(id)

    with {:ok, %Product{}} <- Menu.delete_product(product) do
      send_resp(conn, :no_content, "")
    end
  end
end
