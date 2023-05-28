defmodule ApiWeb.UserJSON do
  # code omitted for brevity

  def render("jwt.json", %{jwt: jwt}) do
    %{jwt: jwt}
  end

  # def render("user.json", %{user: user}) do
  #   %{user: user}
  # end

  # def index(%{users: users}) do
  #   %{data: for(user <- users, do: data(user))}
  # end

  def render("user.json", %{user: user}) do
    %{data: user}
  end

    # defp data(%User{} = user) do
    #   %{
    #     id: user.id,
    #     email: user.email,
    #     password_hash: user.password_hash
    #   }
    # end
end
