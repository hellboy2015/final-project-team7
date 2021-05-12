"""empty message

Revision ID: 0cc9e9aa5453
Revises: 96936baa5bb3
Create Date: 2021-05-10 23:43:36.590578

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0cc9e9aa5453'
down_revision = '96936baa5bb3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('pyme', 'id_user',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('pyme', 'id_user',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###