class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email
      t.string :password_digest
      t.boolean :admin

      t.timestamps
    end

		add_index :users, :email, :unique => true
  end
end
